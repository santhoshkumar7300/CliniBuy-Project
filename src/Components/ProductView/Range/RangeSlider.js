import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export default function RangeSlider() {
  const STEP = 1;
  const MIN = 20;
  const MAX = 40000;
  const [values, setValues] = useState([25, 40000]);

  return (
    <div>
      <p>
        ₹ {values[0]} - ₹ {values[1]}
      </p>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          console.log(values, "===before");
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "11px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}
