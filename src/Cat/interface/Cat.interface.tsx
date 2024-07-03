export interface TableData {
  id: string;
  height: number;
  width: number;
  url: string;
  field?:string
}

export interface DataTableProps {
  tableData: TableData[];
  handleOpen:(value: TableData,name:string) => void;
}
export interface UpdateDialogProps {
    open: boolean;
    handleClose: () => void;
    initialValue: TableData;
    handleSubmit: (value: TableData) => void;
  }
  