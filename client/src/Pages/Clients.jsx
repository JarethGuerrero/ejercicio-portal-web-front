import { useState, useEffect } from "react";
import getClientData from "../config/getClientsData";
import { CustomerDataTable } from "../Components/CustomerDataTable";

export const Clients = () => {
  return (
    <section>
      <CustomerDataTable />
    </section>
  )
};
