# Flexible Filter System - Complete Guide

## 🎯 What This System Does

This system makes table filters **completely flexible** and **configuration-driven**. No more hardcoded column orders, element IDs, or JavaScript modifications when you want to:

- ✅ Change column order
- ✅ Add new columns  
- ✅ Remove columns
- ✅ Add new filter types
- ✅ Modify filter behavior

**Everything is controlled from one place: `get_column_config()` in `lists.py`**

## 🏗️ Architecture

### Data Flow
```
Python (lists.py) → HTML Generation → JavaScript (filtering.js)
       ↓                    ↓                    ↓
Column Config → Data Attributes → Dynamic Filtering
```

### Key Components

1. **Python Side (`src/overrides/hooks/lists.py`)**
   - `ColumnConfig` class: Defines column behavior
   - `get_column_config()`: Central configuration function
   - Dynamic filter generation with data-attributes
   - Column mapping injection into HTML

2. **JavaScript Side (`docs/javascripts/filtering.js`)**
   - Reads column configuration from HTML data-attributes
   - Dynamic filter element discovery
   - Flexible column index mapping
   - Auto-adapting filter logic

## 📝 How to Use

### Change Column Order

Just reorder entries in `get_column_config()`:

```python
return [
    ColumnConfig("title", "Title", _render_title_cell),           # Now first
    ColumnConfig("onderwerp", "Onderwerpen", _render_onderwerp_cell, _render_onderwerp_filter), # Now second  
    ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter),                        # Now third
    ColumnConfig("levenscyclus", "Levenscyclus", _render_levenscyclus_cell, _render_levenscyclus_filter),
]
```

**That's it!** Headers, filters, and JavaScript all update automatically.

### Add a New Column

1. **Create cell render function:**
```python
def _render_priority_cell(file: File, config: MkDocsConfig, current_file: File) -> str:
    priority = file.page.meta.get("priority", "Normal")
    return f"<td>{priority}</td>"
```

2. **Create filter render function (optional):**
```python
def _render_priority_filter(file_list: List[File], filter_options: Dict[str, bool]) -> List[str]:
    priorities = sorted(set(p for file in file_list for p in file.page.meta.get("priority", [])))
    if not priorities:
        return []
    
    filter_id = "filter-priority"
    filter_html = [
        '<div class="filter-item">',
        f'<label for="{filter_id}">Priority</label>',
        f'<select id="{filter_id}" class="js-example-basic-multiple filter-item__select" data-filter-column="priority">',
    ]
    filter_html.extend(f'<option value="{p}">{p}</option>' for p in priorities)
    filter_html.extend(['</select>', '</div>'])
    return filter_html
```

3. **Add to configuration:**
```python
return [
    ColumnConfig("title", "Title", _render_title_cell),
    ColumnConfig("priority", "Priority", _render_priority_cell, _render_priority_filter),  # NEW COLUMN
    ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter),
    # ... other columns
]
```

**Done!** No JavaScript changes needed.

### Remove a Column

Either remove from `get_column_config()` or disable:

```python
ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter, default_enabled=False),
```

### Add a Filter Without Column

For special filters (like search), create the filter function and register it in `generate_filters()`:

```python
if filter_options.get("special-filter", False):
    filters.extend(your_special_filter_function())
```

## 🔧 Technical Details

### Column Configuration Structure

```python
ColumnConfig(
    key="unique_id",           # Used in filter_options and data-filter-column
    title="Display Name",      # Column header text  
    render_cell=function,      # Function to render cell content
    render_filter=function,    # Optional: Function to render filter UI
    default_enabled=True       # Whether shown by default
)
```

### How JavaScript Discovers Columns

1. **Column Mapping**: Python injects column positions via `data-column-mapping`
```html
<div id="table-container" data-column-mapping='{"title": {"index": 0}, "rol": {"index": 1}}'>
```

2. **Filter Discovery**: JavaScript finds filters via `data-filter-column` attributes
```html
<select data-filter-column="rol">
```

3. **Dynamic Filtering**: JavaScript uses the mapping to filter correct column indices

### Filter Element Naming Convention

- **Filter ID**: `filter-{column-key}` (e.g., `filter-rol`)
- **Data Attribute**: `data-filter-column="{column-key}"`
- **CSS Classes**: Keep existing classes for styling

## 🐛 Troubleshooting

### Problem: Filters not working
**Check:** 
- Column key matches between `ColumnConfig` and `data-filter-column`
- JavaScript console for mapping errors
- HTML contains `data-column-mapping` attribute

### Problem: Column not showing
**Check:**
- `default_enabled=True` in ColumnConfig
- Filter function returns valid HTML
- No JavaScript errors in console

### Problem: Filter appears but doesn't filter
**Check:**
- `data-filter-column` attribute is set correctly
- Column key exists in column mapping
- Cell content rendering is working

## 🚀 Advanced Usage

### Custom Filter Logic

For special filtering needs, modify the `filterTable()` function in `filtering.js`. The system is designed to be extensible.

### Conditional Columns

You can make columns conditional based on content type or other factors:

```python
def get_column_config(content_type: str = None) -> List[ColumnConfig]:
    columns = [
        ColumnConfig("title", "Title", _render_title_cell),
        ColumnConfig("rol", "Rollen", _render_rol_cell, _render_rol_filter),
    ]
    
    # Add special column only for vereisten
    if content_type == "vereisten":
        columns.append(ColumnConfig("compliance", "Compliance", _render_compliance_cell))
    
    return columns
```

### Performance Considerations

- Column mapping is cached in JavaScript
- Filter elements are discovered once on initialization  
- No DOM queries during actual filtering (uses cached references)

## 📋 Migration Notes

### From Old System
- Old hardcoded element IDs still work (backwards compatibility)
- Column indices automatically adapt
- AI Act filtering preserved
- All existing functionality maintained

### Testing New Columns
1. Add your column to `get_column_config()`
2. Reload page
3. Check browser console for initialization logs
4. Test filtering functionality

## 🎉 Benefits

1. **Zero JavaScript Changes**: All modifications in Python only
2. **Automatic Synchronization**: Headers, filters, and logic always match
3. **Flexible Column Order**: Change order without breaking anything
4. **Easy Extensions**: Add new columns/filters with minimal code
5. **Maintainable**: Clear separation of concerns
6. **Self-Documenting**: Configuration is the documentation

---

**Questions or issues?** Check the extensive comments in `get_column_config()` function or the JavaScript console logs for debugging information.