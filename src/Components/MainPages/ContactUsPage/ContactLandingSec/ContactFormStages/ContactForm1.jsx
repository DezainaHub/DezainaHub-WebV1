import React, { useState } from "react";
import Select from "@mui/material/Select";
import { Box, Chip, MenuItem, OutlinedInput } from "@mui/material";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactFormFinal from "./ContactFinalStage/ContactFormFinal";
import ContactFormLoader from "./ContactFormLoader/ContactFormLoader";
import { Toaster,  } from "react-hot-toast"

const ServiceOptions = [
  {
    category: "Visual Branding",
    services: [
      "Logo Design",
      "Brand Kit Design",
      "Business Card Design",
      "Letter Head Design",
      "Signage Design",
    ],
  },
  {
    category: "Brand Marketing",
    services: [
      "Poster Design",
      "Banner Design",
      "Flyer Design",
      "Brochure Design",
      "Catalog Design",
      "Social Media Design",
    ],
  },
  {
    category: "Digital Interaction",
    services: [
      "Portfolio Design",
      "Website Design",
      "Application Design",
      "Presentation Design",
      "Pitch Deck Design",
    ],
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const ContactForm1 = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(1);
  const url = "https://dezainabackend.onrender.com/contact";
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    service: [],
  });
  // const [personName, setPersonName] = useState([]);
  console.log(data.service);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setData((prevData) => ({
      ...prevData,
      service: typeof value === "string" ? value.split(",") : value,
    }));
  };

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      message: data.message,
      service: data.service,
    }).then((res) => {
      console.log(res.data);
    });
    setLoading(true);
    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      draggable: true,
    });
    // setFormState(2);
    setTimeout(() => {
      setFormState(2);
      setLoading(false);
    }, 2000);
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="ContactFormMain">
      {/* <ContactFormFinal/> */}
      {/* <ContactFormLoader/> */}

      {loading && <ContactFormLoader />}
      <div className="ContactForm-Container">
        {formState === 1 && (
          <form
            className="ContactLS-Form"
            disabled={loading}
            onSubmit={(e) => submit(e)}
          >
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Name</label>
              <input
                className="ContactLSForm-Input"
                id="name"
                onChange={(e) => handle(e)}
                value={data.name}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Phone</label>
              <input
                className="ContactLSForm-Input"
                id="contactNumber"
                onChange={(e) => handle(e)}
                value={data.contactNumber}
                type="number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Email</label>
              <input
                className="ContactLSForm-Input"
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">
                Service{" "}
                <span style={{ color: "grey", fontSize: "0.6rem" }}>
                  {" "}
                  (Opitional){" "}
                </span>
              </label>
             
              <Select
                style={{
                  display: "flex",
                  // maxHeight: "12px",
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "0",
                  border: "0px",
                }}
                labelId="ContactLSForm-Label"
                id="demo-multiple-chip"
                multiple
                displayEmpty
                value={data.service}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected?.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {ServiceOptions.map((categoryObj) => (
                  <React.Fragment key={categoryObj.category}>
                    <MenuItem
                      style={{ fontWeight: "bold", fontFamily: " Montserrat" }}
                      disabled
                      divider
                    >
                      {categoryObj.category}
                    </MenuItem>
                    {categoryObj.services.map((service) => (
                      <MenuItem
                        key={service}
                        value={service}
                        style={{ fontFamily: " Rasa" }}
                      >
                        {service}
                      </MenuItem>
                    ))}
                    <MenuItem disabled divider />
                  </React.Fragment>
                ))}
              </Select>

              {/*  
                 
                
                  
                  */}
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Message</label>
              <textarea
                className="ContactLSForm-Input"
                id="message"
                onChange={(e) => handle(e)}
                value={data.message}
                type="message"
                rows="4"
                cols="40"
                placeholder="Message, Regarding which we should connect?.."
                required
              />
            </div>
            <button className="ContactLSForm-Button">Submit</button>
          </form>
        )}
        {formState === 2 && <ContactFormFinal />}
        <ToastContainer />
      </div>
      {/* {
                            const form = document.querySelector('form')
                        } */}
    </div>
  );
};

export default ContactForm1;
