/**
 * Test fixtures voor Excel export tests
 * Bevat sample data en verwachte outputs
 */

export const SAMPLE_TABLE_HTML = `
  <table id="myTable">
    <tr>
      <th>ID</th>
      <th>Naam</th>
      <th>Rollen</th>
      <th>Levenscyclus</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Test Maatregel</td>
      <td>data-scientist product-owner</td>
      <td>ontwerp ontwikkeling</td>
    </tr>
  </table>
`;

export const EXPECTED_EXPORT_DATA = [
  ['ID', 'Naam', 'Rollen', 'Levenscyclus'],
  ['1', 'Test Maatregel', 'data-scientist; product-owner', 'ontwerp; ontwikkeling']
];

export const COMPLEX_TABLE_HTML = `
  <table id="myTable">
    <tr>
      <th>ID</th>
      <th>Naam</th>
      <th>Beschrijving</th>
      <th>Rollen</th>
      <th>Levenscyclus</th>
      <th>Onderwerp</th>
    </tr>
    <tr>
      <td>MAA-001</td>
      <td>Data Validatie</td>
      <td>Controleer data kwaliteit<span class="debug">DEBUG INFO</span></td>
      <td>data-scientist developer</td>
      <td>ontwerp ontwikkeling</td>
      <td>transparantie</td>
    </tr>
    <tr>
      <td>MAA-002</td>
      <td>Bias Monitoring</td>
      <td>Monitor voor bias in uitkomsten</td>
      <td>data-scientist product-owner</td>
      <td>monitoring</td>
      <td>fairness</td>
    </tr>
  </table>
`;

export const FILTER_TEST_HTML = `
  <select id="filterSelect" multiple>
    <option value="">Alle rollen</option>
    <option value="data-scientist" selected>Data Scientist</option>
    <option value="product-owner">Product Owner</option>
    <option value="developer" selected>Developer</option>
  </select>

  <select id="filterLevenscyclusSelect" multiple>
    <option value="">Alle fasen</option>
    <option value="ontwerp" selected>Ontwerp</option>
    <option value="ontwikkeling">Ontwikkeling</option>
  </select>

  <select id="filterOnderwerpSelect" multiple>
    <option value="">Alle onderwerpen</option>
    <option value="fairness">Fairness</option>
    <option value="transparantie">Transparantie</option>
  </select>
`;

export const EMPTY_TABLE_HTML = `
  <table id="myTable">
  </table>
`;

export const HEADER_ONLY_TABLE_HTML = `
  <table id="myTable">
    <tr>
      <th>ID</th>
      <th>Naam</th>
      <th>Status</th>
    </tr>
  </table>
`;

// Test configuraties
export const TEST_CONFIG = {
  tableId: 'myTable',
  buttonId: 'export-btn',
  filename: 'test_export',
  sheetName: 'Test',
  multiValueColumns: ['rollen', 'levenscyclus', 'onderwerp'],
  filters: [
    { id: 'filterSelect', type: 'rollen' },
    { id: 'filterLevenscyclusSelect', type: 'levenscyclus' },
    { id: 'filterOnderwerpSelect', type: 'onderwerp' }
  ]
};
