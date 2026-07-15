import react from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import "./App.css";




export default function App() {
  return (
    <div className="ReactPageLayout">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
