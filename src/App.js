import { Scanner } from "@yudiel/react-qr-scanner";

const App = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Scanner
        formats={[
          "aztec",
          "code_128",
          "code_39",
          "code_93",
          "codabar",
          "databar",
          "databar_expanded",
          "data_matrix",
          "dx_film_edge",
          "ean_13",
          "ean_8",
          "itf",
          "maxi_code",
          "micro_qr_code",
          "pdf417",
          "qr_code",
          "rm_qr_code",
          "upc_a",
          "upc_e",
          "linear_codes",
          "matrix_codes",
          "unknown",
        ]}
        onScan={(result) => console.log("result", result)}
      />
    </div>
  );
};
export default App;
