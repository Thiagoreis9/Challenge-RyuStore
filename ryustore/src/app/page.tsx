"use client"

import styles from "./page.module.css";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar></FilterBar>
        <ProductsList></ProductsList>
      </main>
    </QueryClientProvider>
  );
}
