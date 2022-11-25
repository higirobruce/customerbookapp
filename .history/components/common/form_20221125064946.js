import React, { useState } from "react";
import { DatePicker } from "antd";
import { Button, Input } from "semantic-ui-react";
import moment from "moment";

export default function Form() {
  let [date, setDate] = useState(moment());
  let [designation, setDesignation] = useState("");
  let [qty, setQty] = useState(0);
  let [amount, setAmount] = useState(0);
  let [payment, setPayment] = useState(0);
  let [client, setClient] = useState(0);
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex flex-col space-y-1 items-start">
        <div>Date</div>
        <div>
          <DatePicker
            size="large"
            onChange={(date, dateString) => setDate(date)}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-start">
        <div>Designation</div>
        <div>
          <Input
            size="tiny"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-start">
        <div>Quantity</div>
        <div>
          <Input size="tiny" type="number"  value={qty}
            onChange={(e) => setQty(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-start">
        <div>Amount</div>
        <div>
          <Input size="tiny" type="number"  value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-start">
        <div>Payment</div>
        <div>
          <Input size="tiny" type="number"  value={payment}
            onChange={(e) => setPayment(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-col space-y-1 items-start">
        <div>Client</div>
        <div>
          <Input size="tiny"  value={client}
            onChange={(e) => setClient(e.target.value)} />
        </div>
      </div>

      <Button color="blue">Submit</Button>
    </div>
  );
}
