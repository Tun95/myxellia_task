"use client";
import { useEffect, useState } from "react";
import "./styles.scss";
import { JamMessagesF } from "@/assets/icons/icon";

function ChatBox() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPosition({
      x: window.innerWidth - 200,
      y: window.innerHeight - 150,
    });

    const handleResize = () => {
      setPosition({ x: window.innerWidth - 90, y: window.innerHeight - 150 });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse press
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition((prev) => ({
        x: window.innerWidth > 900 ? e.clientX - offset.x : prev.x,
        y: e.clientY - offset.y,
      }));
    }
  };

  // Handle mouse release
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Handle touch press
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    if (dragging) {
      const touch = e.touches[0];
      setPosition((prev) => ({
        x: window.innerWidth > 900 ? touch.clientX - offset.x : prev.x,
        y: touch.clientY - offset.y,
      }));
      e.preventDefault();
    }
  };

  // Handle touch release
  const handleTouchEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging]);

  if (!isClient) {
    return null; // or return a loader/skeleton
  }

  return (
    <div
      className="chat_msg_box"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="float_content l_flex">
        <div className="icons l_flex">
          <span>
            <JamMessagesF className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
