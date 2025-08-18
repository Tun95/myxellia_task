import { MageCalculator, SolarCalculatorBold } from "@/assets/icons/icon";
import "./styles.scss";
import { Popover, Portal } from "@chakra-ui/react";
import budget from "@/assets/images/budget.png";
import Image from "next/image";

function BudgetDropdown() {
  return (
    <div className="budget_component">
      <div className="content">
        <Popover.Root>
          <Popover.Trigger asChild>
            <SolarCalculatorBold className="icon calc_icon" />
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner className="popover_positioner budget_positioner">
              <Popover.Content>
                <Popover.Body className="popover_body">
                  <div className="header budget_header">
                    <Image src={budget} alt="Budget" />
                  </div>
                  <div className="list_btn">
                    <ul className="list">
                      <li className="a_flex">
                        <span className="icons">
                          <MageCalculator className="icon" />
                        </span>
                        <span className="budget_title_desc">
                          <h3>Set up annual budgets by account category</h3>
                          <p>
                            Allocate funds across income and expense lines with
                            full visibility.
                          </p>
                        </span>
                      </li>
                      <li className="a_flex">
                        <span className="icons">
                          <MageCalculator className="icon" />
                        </span>
                        <span className="budget_title_desc">
                          <h3>Track actuals vs budget in real time</h3>
                          <p>
                            See how your community is performing against plan,
                            month by month.
                          </p>
                        </span>
                      </li>
                      <li className="a_flex">
                        <span className="icons">
                          <MageCalculator className="icon" />
                        </span>
                        <span className="budget_title_desc">
                          <h3>Adjust figures and forecast with ease</h3>
                          <p>
                            Edit amounts, apply percentage changes, or roll
                            forward last year&apos;s data—all in one place.
                          </p>
                        </span>
                      </li>
                    </ul>
                    <div className="btn">
                      <button className="main_btn">Create Budget</button>
                    </div>
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

export default BudgetDropdown;
