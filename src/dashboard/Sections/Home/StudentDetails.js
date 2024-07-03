import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function StudentDetails({ tab }) {
  return (
    <>
      {tab == "all" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "16px" }}>Total Students</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              500
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +25
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}>Questions Processed</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              10000
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +250
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}>Silly Mistake</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              83.5
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#d32f2f",
                }}
              >
                {" "}
                <ArrowDropDownIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                -4.7
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}> Time Management</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              73.9{" "}
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +2.2
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}> Concentration</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              81.2{" "}
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#d32f2f",
                }}
              >
                {" "}
                <ArrowDropDownIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                -3.2
              </span>
            </div>
          </div>
        </div>
      )}
      {tab === "batch" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "16px" }}>Total Students</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              200
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +10
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}>Questions Processed</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              5000
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +100
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}>Silly Mistake</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              87.2
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#d32f2f",
                }}
              >
                {" "}
                <ArrowDropDownIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                -3.5
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}> Time Management</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              73.9{" "}
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#388e3c",
                }}
              >
                {" "}
                <ArrowDropUpIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                +2.1
              </span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}> Concentration</div>
            <div style={{ fontWeight: "700", fontSize: "22px" }}>
              81.2{" "}
              <span
                style={{
                  fontSize: "12px",
                  verticalAlign: "middle",
                  marginLeft: "-3px",
                  color: "#d32f2f",
                }}
              >
                {" "}
                <ArrowDropDownIcon
                  sx={{ verticalAlign: "middle", marginRight: "-5px" }}
                />
                -5
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentDetails;
