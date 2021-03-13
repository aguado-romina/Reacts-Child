import React from "react";
function SignupForm() {
  return (
    <div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Make a Profile So You Can Start Matching.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="puppy_parent"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Puppy Parent
                      </label>
                      <input
                        type="text"
                        name="puppy_parent"
                        id="puppy_parent"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="puppy_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Puppy name
                      </label>
                      <input
                        type="text"
                        name="puppy_name"
                        id="puppy_name"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="puppy_breed"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Breed
                      </label>
                      <input
                        type="text"
                        name="puppy_breed"
                        id="puppy_breed"
                        autocomplete="breed"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="puppy_age"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        name="puppy_age"
                        id="puppy_age"
                        autocomplete="age"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6">
                      <label
                        for="puppy_bio"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Bio
                      </label>
                      <input
                        type="text"
                        name="puppy_bio"
                        id="puppy_bio"
                        autocomplete="puppyBio"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupForm;
