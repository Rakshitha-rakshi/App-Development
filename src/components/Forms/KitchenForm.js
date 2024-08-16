import { Form, useLocation, useSubmit } from "react-router-dom";
import Input from "../UI/Input";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./KitchenForm.module.css";
import locations from "../../assets/locations";
import { useRef } from "react";

const KitchenForm = ({ data = {} }) => {
  const isEdit = useLocation().pathname === "/edit-kitchen";
  const submit = useSubmit();
  const nameRef = useRef();
  const locationRef = useRef();
  const cuisineTypeRef = useRef();
  const imageRef = useRef();

  const editHandler = (event) => {
    event.preventDefault();
    const formData = {
      name: nameRef.current.value,
      location: locationRef.current.value,
      cuisineType: cuisineTypeRef.current.value,
      image: imageRef.current.value,
      id: data._id,
    };
    const updateData = {};
    for (const attr in formData) {
      if (formData[attr] !== data[attr]) {
        updateData[attr] = formData[attr];
      }
    }
    submit(updateData, { method: "PATCH" });
  };

  return (
    <Card className={classes.form}>
      <Form method="POST" onSubmit={isEdit && editHandler}>
        <Input
          label="Kitchen Name"
          ref={nameRef}
          attr={{
            id: "kitchen",
            name: "name",
            defaultValue: data.name,
            required: true,
          }}
        />
        <label>
          <b>Location</b>
        </label>
        <select
          id="location"
          ref={locationRef}
          defaultValue={data.location}
          name="location"
          className={classes.selection}
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <Input
          label="Cuisine Type"
          ref={cuisineTypeRef}
          attr={{
            id: "cuisine",
            defaultValue: data.cuisineType,
            name: "cuisineType",
            required: true,
          }}
        />
        <Input
          label="Kitchen Image Link"
          ref={imageRef}
          attr={{
            type: "url",
            defaultValue: data.image,
            id: "image",
            name: "image",
            required: true,
          }}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
};

export default KitchenForm;
