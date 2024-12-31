import { Box, MenuItem, Select } from "@mui/material";

const UnitConversion = () => {
  return (
    <Box>
      Conversion
      <Box>
        <Box>
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
        <box>
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
        </box>
      </Box>
    </Box>
  );
};
export default UnitConversion;
