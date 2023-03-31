"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { ItemsClass } from "../../services/Item";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const item = new ItemsClass();
    const res = await item.getItems();
    setData(res);
    if (res) setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    "Loading...."
  ) : (
    <div>
      <div className="grid gap-3 grid-cols-fluid">
        {data.length >0 && data!.map((item: any) => (
          <p key={item.username}>{item.username}</p>
        ))}
      </div>
      <Link href={"tiptap"}>TipTap</Link>
    </div>
  );
}
