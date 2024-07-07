import ProductsTable from "@/components/Table";
import React from "react";
export const metadata = {
  title: "App-Product",
};
export default function ProductPage() {
  return (
    <>
      <h1 className="text-center pt-5">Product INFO</h1>
      <ProductsTable />
    </>
  );
}
