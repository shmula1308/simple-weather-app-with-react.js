import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import classes from "./SearchBox.module.css";

const SearchBox = (props) => {
  return (
    <form>
      <div className={classes.controls}>
        <Input
          input={{
            id: "city",
            type: "text",
            placeholder: "Search for a city",
          }}
        />
        <Button type='submit' className={classes.searchBtn}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;
