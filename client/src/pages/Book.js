import React from "react";

function Book() {
  return (
    <div style={{ marginTop: "60px" }} className="text-center bg-gray-900 pb-20">
      <div class="mt-[60px] mb-8 grid place-items-center font-mono bg-gray-900">
        <div class=" rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://books.goalkicker.com/JavaScriptBook/JavaScriptGrow.png"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 md:shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">Switch Case</p>
              <hr class="my-2 text-gray-500" data-content="" />
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                Switch case statements are a substitute for long if statements
                that compare a variable to multiple values. After a match is
                found, it executes the corresponding code of that value case{" "}
              </p>

              <p class="flex text-md px-4 my-2">Rating: 9.0/10</p>

              <div class="text-xs">
                <a href="/Switch.pdf" download>
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-4 w-full">
            <div class="flex mt-4">
              <a href="/Switch.pdf" target="_blank">
                <i class="material-icons text-blue-600">remove_red_eye</i>
              </a>
            </div>
            <div class="flex">
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_neutral
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_dissatisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">star_outline</i>
              <i class="material-icons ml-2 text-yellow-600">star_half</i>
              <i class="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>
     
     <div class="mb-8 grid place-items-center font-mono bg-gray-900">
        <div class=" rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://m.media-amazon.com/images/I/51iKSUkBGSL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 md:shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">JavaScript Design Patterns</p>
              <hr class="my-2 text-gray-500" data-content="" />
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
              Mastering JavaScript Design Patterns - Third Edition: Create scalable and reliable applications with advanced JavaScript Design Patterns using reliable code. {" "}
              </p>

              <p class="flex text-md px-4 my-2">Rating: 8.0/10</p>

              <div class="text-xs">
                <a href="/Pattern.pdf" download>
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-4 w-full">
            <div class="flex mt-4">
              <a href="/Pattern.pdf" target="_blank">
                <i class="material-icons text-blue-600">remove_red_eye</i>
              </a>
            </div>
            <div class="flex">
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_neutral
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_dissatisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">star_outline</i>
              <i class="material-icons ml-2 text-yellow-600">star_half</i>
              <i class="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>


      <div class="mb-8 grid place-items-center font-mono bg-gray-900">
        <div class=" rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://m.media-amazon.com/images/I/51OFkZ5ZYcL._SX404_BO1,204,203,200_.jpg"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 md:shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">JavaScript Data Structures and Algorithms</p>
              <hr class="my-2 text-gray-500" data-content="" />
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
              Learning JavaScript Data Structures and Algorithms - Second Edition: Hone your skills by learning classic data structures and algorithms in JavaScript
              </p>

              <p class="flex text-md px-4 my-2">Rating: 10.0/10</p>

              <div class="text-xs">
                <a href="/Sorting.pdf" download>
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-4 w-full">
            <div class="flex mt-4">
              <a href="/Sorting.pdf" target="_blank">
                <i class="material-icons text-blue-600">remove_red_eye</i>
              </a>
            </div>
            <div class="flex">
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_neutral
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_dissatisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">star_outline</i>
              <i class="material-icons ml-2 text-yellow-600">star_half</i>
              <i class="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>

      <div class=" grid place-items-center font-mono bg-gray-900">
        <div class=" rounded-md bg-gray-800 shadow-lg">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://itbook.store/img/books/9781484239872.png"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 md:shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">Full concept</p>
              <hr class="my-2 text-gray-500" data-content="" />
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
              Explore data structures and algorithm concepts and their relation to everyday JavaScript development. A basic understanding of these ideas is essential to any JavaScript developer wishing to analyze and build great software solutions.
              </p>

              <p class="flex text-md px-4 my-2">Rating: 4.0/10</p>

              <div class="text-xs">
                <a href="/Notes.pdf" download>
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 mb-4 w-full">
            <div class="flex mt-4">
              <a href="/Notes.pdf" target="_blank">
                <i class="material-icons text-blue-600">remove_red_eye</i>
              </a>
            </div>
            <div class="flex">
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_neutral
              </i>
              <i class="material-icons ml-2 text-yellow-600">
                sentiment_very_dissatisfied
              </i>
              <i class="material-icons ml-2 text-yellow-600">star_outline</i>
              <i class="material-icons ml-2 text-yellow-600">star_half</i>
              <i class="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Book;

{
  /* <div>
          Switch Case
          <a href ="/Switch.pdf" target = "_blank">Preview</a>
          <a href ="/Switch.pdf" download>Download</a>
          </div>
          <div>
          Pattern Making
          <a href ="/Pattern.pdf" target = "_blank">Preview</a>
          <a href ="/Pattern.pdf" download>Download</a>
          </div>
          <div>
          Sorting
          <a href ="/Sorting.pdf" target = "_blank">Preview</a>
          <a href ="/Sorting.pdf" download>Download</a>
          </div>
          <div>
          Overview
          <a href ="/Notes.pdf" target = "_blank">Preview</a>
          <a href ="/Notes.pdf" download>Download</a>
          </div> */
}
