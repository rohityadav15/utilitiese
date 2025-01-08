import { Box, MenuItem, Select } from "@mui/material";

const UnitConversion = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "50%",
        width: "50%",
        backgroundColor: "#ffff",
      }}
    >
      Conversion
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50%",
          width: "50%",
          backgroundColor: "#ffff",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            height: "50%",
            width: "50%",
            backgroundColor: "#ffff",
          }}
        >
          <Select
            labelId="unit-select-label"
            id="unit-select"
            //   value={selectedUnit}
            //   onChange={handleChange}
            label="Select Unit"
          >
            <MenuItem value="cm">cm</MenuItem>
            <MenuItem value="meter">meter</MenuItem>
            <MenuItem value="inch">inch</MenuItem>
          </Select>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            height: "50%",
            width: "50%",
            backgroundColor: "#ffff",
          }}
        >
          <Select
            labelId="unit-select-label"
            id="unit-select"
            //   value={selectedUnit}
            //   onChange={handleChange}
            label="Select Unit"
          >
            <MenuItem value="cm">cm</MenuItem>
            <MenuItem value="meter">meter</MenuItem>
            <MenuItem value="inch">inch</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};
export default UnitConversion;
