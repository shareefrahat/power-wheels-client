import React from "react";

const Blogs = () => {
  const method1 = `
const arr = [
    { name: "laptop", price: 47 },
    { name: "mobile", price: 47 },
    { name: "laptop mobile", price: 47 },
  ];
  
const finder = arr.find((a) => a.name
                         === "laptop");
console.log(finder);
  `;

  const method2 = `
function search(nameKey, myArray) {
 for (var i = 0; i < myArray.length; i++) 
 {
    if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }
  
const searchResult = search("mobile", arr);
console.log(searchResult);
  `;
  return (
    <>
      <section>
        <h2 className="text-xl lg:text-2xl font-primary my-10">Latest Blogs</h2>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-20 w-fit mx-5 lg:mx-10 my-10">
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                How will you improve the performance of a React Application?
              </p>
            </div>

            <div className="px-4">
              <p className="font-secondary text-gray-700 text text-justify">
                <ul className="list-disc">
                  <li>
                    Unnecessary re-rendering prevent করা। এক্ষেত্রে react.memo()
                    ব্যবহার করে memorizing এর কাজ করা যেতে পারে।
                  </li>
                  <li>
                    Components এর states গুলো প্রয়োজন অনুসারে local-এ রাখা।
                  </li>
                  <li>
                    Bundle Size বড় হলো initial page loading slow হয়ে যায়,
                    এক্ষেত্রে large bundle file এর জন্য code-split করা যেতে
                    পারে।
                  </li>
                  <li>
                    সব image re-render না করে image এর জন্য lazy loading ব্যবহার
                    করা যেতে পারে।
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                What are the different ways to manage a state in a React
                application?
              </p>
            </div>

            <div className="px-4">
              <p className="font-secondary text-gray-700 text text-justify">
                <ul className="list-disc">
                  <li>
                    একটা component এর ভেতর useState() hook দিয়ে locally state
                    manage করে পারি।
                  </li>
                  <li>
                    Parents component থেকে child components এ props drilling করে
                    state manage করতে পারি।
                  </li>
                  <li>
                    Context API ব্যবহার করে state management এর কাজ করা যেতে
                    পারে
                  </li>
                  <li>
                    Redux ব্যবহার করে large scale application এর জন্য state
                    manage করা সুবিধাজনক।
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                How does prototypical inheritance work?
              </p>
            </div>

            <div className="px-4">
              <p className="font-secondary text-gray-700 text text-justify">
                Javascript এর প্রত্যেকটা object এর একটা private property থাকে
                prototype নামে। যেহেতু prototype নিজেই একটা object সেহেতু তার
                ভিতরে আরেকটা prototype object থাকে। এভাবে একটা prototype এর
                মধ্যে আরকেটা prototype object নেস্টেট ভাবে থাকে যতক্ষণ না
                সর্বশেষ property null হয়। যেহেতু Javascript এর function নিজেই
                একটা object সেহেতু একটা function এর prototype মধ্যে যা থাকে সেটা
                অন্য একটা function এর prototype এর মধ্যে নিয়ে আসা যায়
                prototypical inheritance দিয়ে।
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                Why you do not set the state directly in React. For example, if
                you have `const [products, setProducts] = useState([])`. Why you
                do not set `products = [...]` instead, you use the
                `setProducts`?
              </p>
            </div>

            <div className="px-4">
              <p className="font-secondary text-gray-700 text text-justify">
                আমরা জানি React এর state directly mutate করা হয় না। কারণ একটা
                state যখন change হয় তখন React একটা life cycle process এর মধ্যে
                দিয়ে যায় যেখানে তিনটা phase থাকে:{" "}
                <ul>
                  <li>1. Mounting</li>
                  <li>2. Updating</li>
                  <li>3. Unmounting</li>
                </ul>
                একটা react component যখন re-rendering হয় তখন তার state mounting
                or updating phase এর মধ্যে থাকে। এজন্য যদি directly state update
                করা হয় তবে সেখানে odd bug দেখা দেওয়ার সম্ভাবনা থাকে।
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                You have an array of products. Each object has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </p>
            </div>

            <div className="px-4 w-[300px] lg:w-[400px] overflow-auto">
              <p className="font-secondary text-gray-700 text text-justify">
                Method-1:
                <pre>
                  <code>{method1}</code>
                </pre>
                Method-2:
                <pre>
                  <code>{method2}</code>
                </pre>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <p className="text-left text-xl font-primary mb-4">
                What is a unit test? Why should write unit tests?
              </p>
            </div>

            <div className="px-4">
              <p className="font-secondary text-gray-700 text text-justify">
                Unit testing হচ্ছে একটা software/application testing method.
                যেটার মাধ্যমে source code এর individual unit টেস্ট করা হয় এটা
                determine করার জন্য যে এই code বা sets of code গুলো ব্যবহার করার
                জন্য fit কিনা।
                <p>Unit Test লিখার কারণ সমুহ:</p>
                <ul>
                  <li>Unit Tests are Repeatable and it Makes Coding Agile</li>
                  <li>Detects Software Bugs Early</li>
                  <li>Provides Documentation</li>
                  <li>Improves the Quality of Code</li>
                  <li>Easier Changes and Simplified Integrations</li>
                  <li>Easy Debugging</li>
                </ul>
                একটা react component যখন re-rendering হয় তখন তার state mounting
                or updating phase এর মধ্যে থাকে। এজন্য যদি directly state update
                করা হয় তবে সেখানে odd bug দেখা দেওয়ার সম্ভাবনা থাকে।
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
