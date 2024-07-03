// Cat.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./component/DataTable";
import { TableData } from "./interface/Cat.interface";
import UpdateDialog from "./component/UpdateDialog";

interface CatImage {
  id: string;
  height: number;
  width: number;
  url: string;
}

const Cat: React.FC = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selecteValue, setSelecteValue] = useState<TableData>({} as TableData);

  const fetchCatImages = (limit: number) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
      .then((response) => {
        setCatImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  };
  const handleClose = () => {
    setDialogOpen(false);
    setSelecteValue({} as TableData);
  };

  const handleSubmit = (value: TableData) => {
    const index = catImages.findIndex((cat: CatImage) => cat.id === value.id);
    if (index !== -1) {
      const updatedCatImages = [...catImages];
      // Replace the object with the updated value
      updatedCatImages[index] = { ...catImages[index], ...value };
      setCatImages(updatedCatImages);
    } else console.log("Item not found");
    handleClose();
  };

  const handleClick = (value: TableData, fieldName: string) => {
    setSelecteValue({ ...value, field: fieldName });
    setDialogOpen(true);
  };

  useEffect(() => {
    fetchCatImages(10);
  }, []);

  return (
    <div>
      <DataTable tableData={catImages} handleOpen={handleClick} />
      <UpdateDialog
        open={dialogOpen}
        handleClose={handleClose}
        initialValue={selecteValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Cat;
