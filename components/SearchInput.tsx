"use client";

import { useRouter } from "next/navigation";
import Input from "./Input";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="Search songs here...."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
