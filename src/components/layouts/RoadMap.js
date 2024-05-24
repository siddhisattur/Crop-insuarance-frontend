import React from "react";
import { Row, Col } from "react-bootstrap";

export const RoadMap = ({ count }) => {
    const activeColors = ["#D3D3D3"]; // Active colors
    const inactiveColors = ["#808080"]; // Inactive colors

    const div1Elements = [];

    // Generate div1 elements based on the count
    for (let i = 0; i < count; i++) {
        // Determine if the current column should be active or inactive
        const isEven = i % 2 === 0;
        const colors = isEven ? activeColors : inactiveColors;

        // Get the color from the appropriate array
        const colorIndex = i % colors.length;
        const color = colors[colorIndex];

        // Determine if the column is active or inactive
        const isActive = isEven ? "active" : "inactive";

        div1Elements.push(
            <Col
                key={i}
                className={`div1 ${isActive}`}
                style={{
                    backgroundColor: color,
                    width: `${100 / count}%`, // Distribute width evenly
                    height: "70px", // Adjust the height as needed
                }}
            ></Col>
        );
    }

    return (
        <Row className="roadmap" style={{ margin: 0, padding: 0 }}>
            {div1Elements}
        </Row>
    );
};

