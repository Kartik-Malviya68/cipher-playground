"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function page() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }
  function reset() {
    if (counter > 0) {
      setCounter(0);
    }
  }
  function decrease() {
    if (counter < 0) {
      setCounter(0);
    } else {
      setCounter(0);
    }
    setCounter(counter - 1);
  }

  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <h1>{counter}</h1>
      <Button onClick={increase} size={"icon"}>
        +
      </Button>

      <Button
        variant={counter > 0 ? "default" : "destructive"}
        disabled={counter < 1}
        onClick={decrease}
        size={"icon"}
      >
        -
      </Button>
      {counter > 0 && <Button onClick={reset}>Reset</Button>}
    </div>
  );
}

export default page;
