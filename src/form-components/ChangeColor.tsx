import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Change Color</h3>
            <Form
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="colorOptions"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => {
                            setSelectedColor(e.target.value);
                        }}
                        inline
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color:
                                        color === "black" ? "white" : "black",
                                    padding: "5px",
                                    borderRadius: "3px",
                                    display: "inline-block",
                                    minWidth: "50px",
                                    textAlign: "center",
                                }}
                            >
                                {color}
                            </span>
                        }
                    />
                ))}
            </Form>
            <p style={{ marginTop: "10px" }}>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        color: selectedColor === "black" ? "white" : "black",
                        padding: "3px",
                        borderRadius: "3px",
                    }}
                >
                    {selectedColor}
                </span>
                .
            </p>
        </div>
    );
}
