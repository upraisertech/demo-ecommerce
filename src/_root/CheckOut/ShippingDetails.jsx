import { useEffect, useState } from "react";
import FormField from "./FormField";

export default function Grid() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(parseFloat(savedTotal));
    }
  }, []);

  return (
    <main class="grid md:grid-cols-2 max-w-[26cm] gap-x-3 justify-center mx-auto my-[2cm] grid-cols-2 bg-white">
      <section class="flex flex-col bg-white rounded-t-lg">
        <FormField />
      </section>

      <section class="flex flex-col bg-white p-5 mt-3">
        <main className="flex flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Product</h3>
            {/* <p className="text-xs font-medium mb-4 text-[#94a3b8]">
              MIRAGE MR-AT172 285/65
            </p> */}
            <p className="text-xs font-semibold mb-4">Subtotal</p>
            <p className="text-xs font-semibold mb-4">Total</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Subtotal</h3>
            {/* <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p> */}
            <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p>
            <p className="text-xl font-semibold mb-4 text-[#fcd34d]">
              ${total.toFixed(2)}
            </p>
          </div>
        </main>

        <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-400"></hr>
        <main className="flex flex-col gap-3">
          <section>
            <div className="flex flex-row gap-3">
              <input type="radio" className="bg-gray-50" />
              <p className="text-sm">Direct Bank Transfer</p>
            </div>
            <p className="text-sm font-normal w-[12cm] text-[#9ca3af]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </section>

          <section>
            <div className="flex flex-row gap-3">
              <input type="radio" className="bg-dark" />
              <p className="text-[#9ca3af] text-sm">Direct Bank Transfer</p>
            </div>
            <div className="flex flex-row gap-3">
              <input type="radio" className="bg-dark" />
              <p className="text-[#9ca3af] text-sm">Cash On Delivary</p>
            </div>
          </section>

          <p className="text-sm font-normal w-[12cm] text-[#9ca3af]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold text-black">privacy policy.</span>
          </p>

          <div className="mt-4">
            <button
              type="button"
              class="py-4 max-w-[5cm] mx-[4cm] justify-center px-12 me-2 mb-2 text-sm font-normal focus:outline-none bg-white rounded-xl border hover:bg[#fcd34d] hover:text-white dark:border-[#fcd34d] dark:hover:text-white dark:hover:bg-[#fcd34d]"
            >
              Place Order
            </button>
          </div>
        </main>
      </section>
    </main>
  );
}