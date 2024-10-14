import productData from "../../public/data/Kartu Grafis Jason.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IProduct {
  IdProduk: number;
  KodeProduk: number;
  NamaProduk: string;
  HargaModal: number;
  HargaJual: number;
  HargaDiskon: number;
  Stok: string;
}

const ProductList = () => {
  const products: IProduct[] = productData["Kartu Grafis"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">DAFTAR PRODUK</h1>
      {products.map((product) => (
        <CardList key={product.IdProduk}>
          <p>Nama Produk: {product.NamaProduk}</p>
          <i>Kode Produk: {product.KodeProduk}</i>
          <p>Harga Modal: Rp{product.HargaModal.toLocaleString()}</p>
          <p>Harga Jual: Rp{product.HargaJual.toLocaleString()}</p>
          <p>Harga Diskon: Rp{product.HargaDiskon.toLocaleString()}</p>
          <p>Stok: {product.Stok}</p>
          <ViewUserButton userId={product.IdProduk} />
        </CardList>
      ))}
    </>
  );
};

export default ProductList;
