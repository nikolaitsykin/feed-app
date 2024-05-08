import React from "react";
import MyInput from "./UI/Input/Input";
import MySelect from "./UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Sort..."}
        options={[
          { value: "title", name: "by name" },
          { value: "body", name: "by description" },
          { value: "id", name: "by order" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
