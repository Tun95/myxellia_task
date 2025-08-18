import {
  BxArrowBack,
  MaterialSymbolsCloseRounded,
  SolarCalendarBold,
} from "@/assets/icons/icon";
import "./styles.scss";
import { Popover, Portal } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DateDropdown() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="date_dropdown">
      <div className="content">
        <Popover.Root>
          <Popover.Trigger asChild>
            <SolarCalendarBold className="icon date_icon" />
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner className="popover_positioner">
              <Popover.Content>
                <Popover.Body className="popover_body">
                  <div className="header c_flex">
                    <div className="box_title a_flex">
                      <BxArrowBack className="icon" />
                      <h4>Calender</h4>
                    </div>
                    <div className="close_icon l_flex">
                      <MaterialSymbolsCloseRounded className="icon" />
                    </div>
                  </div>
                  <div className="date_box">
                    <Calendar
                      onChange={onChange}
                      value={value}
                      className="custom_calendar"
                      prev2Label={null} 
                      next2Label={null} 
                    />
                  </div>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </div>
    </div>
  );
}

export default DateDropdown;
