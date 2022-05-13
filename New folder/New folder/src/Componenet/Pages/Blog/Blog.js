import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Difference between authorization and authentication
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Why are you using `firebase`? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              Firebase-এর সেরা বৈশিষ্ট্যগুলির মধ্যে একটি হল অ্যানালিটিক্স
              ড্যাশবোর্ড যা এটি দিয়ে সজ্জিত। এটি বিনামূল্যে এবং 500টি ইভেন্টের
              প্রকার রিপোর্ট করার ক্ষমতা রয়েছে, প্রতিটিতে 25টি পর্যন্ত
              বৈশিষ্ট্য রয়েছে৷ এটির মাধ্যমে অনেক সহজেই মার্কেটিং করা যায় এবং
              আমি যে নির্দিষ্ট ব্যবহারকারীদের কাছে পৌঁছে দিতে চাচ্ছি তাদের সহজেই
              পাওয়া যায়। এবং অ্যাপ ডেভেলপমেন্ট এর সবচেয়ে গুরুত্বপূর্ণ দিকগুলো
              মধ্যে একটি হলো সময়ের সাথে সাথে ব্যবহারকারীদের বাড়াতে এবং তাদের
              সাথে যুক্ত হতে সক্ষম হওয়া সার্ভিসের মাধ্যমে অনেক সহজেই করা যায়।
              এবং আমার পছন্দের সবচেয়ে প্রিয় শিকড় এর মধ্যে একটি হলো যে সিস্টেম
              দিয়েই অ্যাপ ডেভেলপ করতে চাই না কেন সব সবকিছুর জন্যই সমাধান রয়েছে
              Firebase alternative Back4App. ... AWS Amplify. ... Kuzzle. ...
              Couchbase. ... NativeScript. ... RxDB. ... Flutter.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What other services does `firebase` provide other than
              authentication{" "}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              What other services does `Firebase` provide other than
              authentication Cloud Messaging: Deliver and receive messages in a
              more reliable way across platforms Authentication: Have a lot less
              friction with acclaimed authentication Hosting: Deliver web
              content faster Remote Configuration: Customize your app on the go
              Test Lab: Test in the lab instead of on your users Crash
              Reporting: Keep your app stable Realtime Database: Store and sync
              app data in realtime Storage: File storing made easy Integration
              with Other Services Audience Segmentation Unlimited Reporting
              Dynamic Links.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
