import { Button, Popover, Typography } from "@mui/material";
import React from "react";
import "./popoverButton.css";

interface ButtonPopoverProps {
  data: any;
}

const ButtonPopover = ({ data }: ButtonPopoverProps) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={"buttonContainer"}>
      <Button
        size={"small"}
        sx={{
          variant: "contained",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "gray",
          },
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Expand Explanation of Benefits
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <pre>
          <Typography sx={{ p: 2 }}>{JSON.stringify(data, null, 2)}</Typography>
        </pre>
      </Popover>
    </div>
  );
};

export default ButtonPopover;
