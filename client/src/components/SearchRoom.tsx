import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useGroup from "../hooks/useGroup";
import * as Yup from "yup";
import { UserGroup } from "../hooks/useAuth";

function SearchRoom(props: { userGroups: UserGroup[] }) {
  const { joinGroup } = useGroup();
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (event: any) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    if (props.userGroups.length === 1) {
      setSelected(props.userGroups[0].id);
    }
  }, [props.userGroups]);

  const formik = useFormik<JoinValues>({
    initialValues: {
      invitation: "",
      token: localStorage.getItem("token") as string,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      invitation: Yup.string()
        .required("Group invitation is required")
        .min(24, "Must be 24 characters")
        .max(24, "Must be 24 characters"),
    }),
    onSubmit: (values) => {
      joinGroup(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex">
        <select
          value={selected}
          onChange={(e) => handleSelect(e)}
          className="bg-white dark:bg-black text-sm dark:text-white border-none focus:border-none focus:outline-none"
        >
          {props.userGroups.map((element, index) => (
            <option value={element.id} key={index}>
              {element.name}
            </option>
          ))}
        </select>
        <p>{selected}</p>
      </div>
      <input
        id="invitation"
        name="invitation"
        value={formik.values.invitation}
        onChange={formik.handleChange}
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
    </form>
  );
}

export default SearchRoom;
