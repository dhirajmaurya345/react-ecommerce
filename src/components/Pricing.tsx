// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

import { useState } from "react";
import tick from "../assets/tick.svg";
import x from "../assets/x.svg";


export default function Pricing() {
  const [activeFlex, setActiveFlex] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState(false);
  const [activeEnterprise, setActiveEnterprise] = useState(false);
  const [authors, setAuthors] = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState(false);
  const [authorCount, setAuthorCount] = useState(0);
   const [authorPrice, setAuthorPrice] = useState(20)

  const [knowledgeCount, setKnowledgeCount] = useState(0);
   const [knowledgePrice, setKnowledgePrice] = useState(40)

  const data = {
    Flex: ["Flex plan (1 Author, 1 Kb)", "$79/mo"],
    Business: ["Business plan (1 Author, 1 Kb)", "$299/mo"],
    Enterprise: ["Enterprise plan (1 Author, 1 Kb)", "$999/mo"],
  };
const flx=79;
const busness=299;
const entrprise=999;

const total=(x:number,y:number,z:number)=>{
return z+y+x;
}


  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-8">
      <h1 className="text-center font-serif text-gray-700 text-5xl pt-8 ">
        {" "}
        Find the Right Pricing Plan for You
      </h1>
      <div className="grid grid-cols-3 gap-4 pt-7 space-x-4 ">
        {/* choose ur plane  */}
        {/* Flex */}
        <div className="flex-row h-350px w-64 ">
          <span className="text-sm text-gray-400">Choose your plan:</span>
          <div>
            {activeFlex ? (
              <div className="flex flex-row">
               <div className="p-4 border-orange-300 items-center justify-center bg-orange-300  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-20">
                    <div className=" font-semibold">Flexd</div>
                    <div className=" ">from$79/mo</div>
                    </div>
                    <div className=" text-sm text-gray-900">
                    Best for small teams
                  </div>
                  </div>
                </div>
                <div
                  className="flex mt-4
    border-t-[60px] border-t-transparent
    border-l-[15px] border-l-orange-300
    border-b-[60px] border-b-transparent"
                ></div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveFlex(true);
                  setActiveBusiness(false);
                  setActiveEnterprise(false);
                }}
                
              >
                <div className="p-4 border items-center justify-center bg-white  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-20">
                    <div className=" font-semibold">Flexd</div>
                    <div className=" ">from$79/mo</div>
                    </div>
                    <div className=" text-sm text-gray-400">
                    Best for small teams
                  </div>
                  </div>
                </div>
              </button>
            )}
          </div>
          <div>
            {/* Business */}
            {activeBusiness ? (
              <div className="flex flex-row space-x-0">
                <div className="p-4 border-red-300 items-center justify-center bg-red-300  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-12">
                    <div className=" font-semibold">Business</div>
                    <div className=" ">from$299/mo</div>
                    </div>
                    <div className=" text-sm text-gray-900">
                    Best for mid-size teams
                  </div>
                  </div>
                </div>
                <div
                  className="flex mt-4
    border-t-[60px] border-t-transparent
    border-l-[15px] border-l-red-300 
    border-b-[60px] border-b-transparent"
                ></div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveFlex(false);
                  setActiveBusiness(true);
                  setActiveEnterprise(false);
                }}
                  >
                 <div className="p-4 border items-center justify-center bg-white  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-12">
                    <div className=" font-semibold">Business</div>
                    <div className=" ">from$299/mo</div>
                    </div>
                    <div className=" text-sm text-gray-400">
                    Best for mid-size teams
                  </div>
                  </div>
                </div>
              </button>
            )}
          </div>
{/* Enterprise */}
          <div>
            {activeEnterprise ? (
              <div className="flex flex-row">
                <div className="p-4 border items-center justify-center bg-gray-200  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-16">
                    <div className=" font-semibold">Flexd</div>
                    <div className="pr-2 ">from$999/mo</div>
                    </div>
                    <div className=" text-sm text-gray-900">
                    Best for large teams
                  </div>
                  </div>
                </div>
                <div
                  className="flex mt-4
    border-t-[60px] border-t-transparent
    border-l-[15px] border-l-gray-200
    border-b-[60px] border-b-transparent"
                ></div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveFlex(false);
                  setActiveBusiness(false);
                  setActiveEnterprise(true);
                }}
               
              >
            <div className="p-4 border items-center justify-center bg-white  mt-4  rounded-md text-sm ">
                  <div className="flex flex-col items-start justify-start space-y-10">
                    <div className="flex flex-row space-x-10">
                    <div className=" font-semibold">Enterprise</div>
                    <div className=" ">from$999/mo</div>
                    </div>
                    <div className=" text-sm text-gray-400">
                    Best for large teams
                  </div>
                  </div>
                </div>

              </button>
            )}
          </div>
        </div>
        {/* plan incude */}

        <div className="flex flex-col">
          <div className="basis-1/4 p-3">
            <p className="text-sm text-gray-400 pb-1">All Plans include:</p>
            {/* All plans include: */}
            <div className="flex flex-row space-x-2">
              <div className="space-y-3 pt-3">
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
                <img src={tick} />
              </div>

              <div>
                <div>1 Auther</div>
                <div>1 Knowledge base</div>
                <div>All feature</div>
                <div>Unlimited reader</div>
                <div>
                  Awesome support with no quotas or limits on emails, meetings,
                  etc.
                </div>
                <div>User access management</div>
                <div>Custom roles and permissions</div>
              </div>
            </div>
          </div>
          {/* Additionally in Business: */}

          <div className="basis-1/4 p-2">
            <p className="text-sm text-gray-400 pb-1">
              Additional in Business:
            </p>

            <div className="flex flex-row space-x-2">
              {activeBusiness || activeEnterprise ? (
                <>
                  <div className="space-y-2 pt-2">
                    <img src={tick} />
                    <img src={tick} />
                    <img src={tick} />
                    <img src={tick} />
                    <img src={tick} />
                  </div>
                  <div>
                <div>99.5% uptime SLA</div>
                <div>Priority support</div>
                <div>Priority support</div>
                <div>BAA Agreement (for HIPAA compliance )</div>
                <div>Upload your own SSL certs</div>
              </div>
                </>
              ) : (
                <>
                  <div className="space-y-1 pt-1">
                    <img src={x} />
                    <img src={x} />
                    <img src={x} />
                    <img src={x} />
                    <img src={x} />
                  </div>
                  <div className="text-gray-400 line-through">
                <div>99.5% uptime SLA</div>
                <div>Priority support</div>
                <div>Priority support</div>
                <div>BAA Agreement (for HIPAA compliance )</div>
                <div>Upload your own SSL certs</div>
              </div>
                </>
              )}

            </div>
          </div>

          <div className="basis-1/4 p-2">
            <p className="text-sm text-gray-400 pb-1">
              Additional in Enterprise:
            </p>

            <div className="flex flex-row space-x-2">
              {activeEnterprise ? (
                <>
                  <div className="space-y-2 pt-2">
                    <img src={tick} />
                    <img src={tick} />
                    <img src={tick} />
                    <img src={tick} className="pt-2" />
                  </div>
                  <div className="text-sm font-sans ">
                <div>99.9% update SLA</div>
                <div>Vendor security form</div>
                <div>Custom terms & conditions (*annual subscription only)</div>
                <div>Dedicated account management</div>
              </div>
                </>
              ) : (
                <>
                  <div className="space-y-1 pt-1">
                    <img src={x} />
                    <img src={x} />
                    <img src={x} />
                    <img src={x} className="pt-2" />
                  </div>
                 <div className="text-sm font-sans text-gray-400 line-through">
                <div>99.9% update SLA</div>
                <div>Vendor security form</div>
                <div>Custom terms & conditions (*annual subscription only)</div>
                <div>Dedicated account management</div>
              </div>
                </>
              )}

              
            </div>
          </div>
        </div>
        {/* add auther or knowle based plan */}

        <div className="flex flex-col">
          <p className="text-sm text-gray-400 pb-1">
            Add authors and knowledge bases to your plan
          </p>
          <div className="pt-5 pl-2">
            <div className="pb-3">Authors</div>
            <div className="flex flex-row space-x-2">
              <div className="">$20/author/mo</div>
              <button
                onClick={() => {
                  if(authorCount>=0){setAuthors(false);}
                  if(authorCount>0)setAuthorCount(()=>authorCount - 1);
                  setAuthorPrice(()=>authorPrice-20)
                }}
                className="pl-40"
              >
                -
              </button>
              <div className="">{authorCount}</div>
              <button
                onClick={() => {
                  if(authorCount>=0){setAuthors(true)};
                  setAuthorCount(()=>authorCount + 1);
                  setAuthorPrice(()=>authorPrice+20);
                }}
                className=""
              >
                +
              </button>
            </div>

            <div className="pb-3 pt-10">Knowledge bases (Kb)</div>
            <div className="flex flex-row space-x-2">
              <div className="">$40/kb/mo</div>
              <button
                onClick={() => {
                  if(knowledgeCount>=0){setKnowledgeBase(false);}
                  if(knowledgeCount>0)setKnowledgeCount(()=>knowledgeCount - 1);
                  setAuthorPrice(()=>knowledgePrice-40)
                }}
                className="pl-48"
              >
                -
              </button>
              <div className="">{knowledgeCount}</div>
              <button
                onClick={() => {
                  if(knowledgeCount>=0)setKnowledgeBase(true);
                  setKnowledgeCount(()=>knowledgeCount + 1);
                  setKnowledgePrice(()=>knowledgePrice+40)
                }}
                className=""
              >
                +
              </button>
            </div>
          </div>

          <div className="pt-5  text-sm text-gray-400 pb-2">
            Your plan summary:
          </div>
          <div className="border  rounded-sm pt-2 pr-2 pl-2">
            <div className="flex flex-row space-x-2 pt-3 pl-2 pr-2 pb-3">
              <div className="flex flex-col space-y-2 pt-2">
                <img src={tick} />
                {authors ? <img src={tick} /> : <img src={x} />}
                {knowledgeBase ? <img src={tick} /> : <img src={x} />}
              </div>

              <div className="flex flex-col">
                <div className="text-sm">
                  {activeBusiness
                    ? data.Business[0]
                    : activeEnterprise
                    ? data.Enterprise[0]
                    : data.Flex[0]}
                </div>
                <div>Additional Authors (none)</div>
                <div>Additional Kbs (none)</div>
                <div className="font-semibold">Total</div>
              </div>
              <div className="flex flex-col pl-12">
                <div className="text-gray-400">
                  {activeBusiness
                    ? data.Business[1]
                    : activeEnterprise
                    ? data.Enterprise[1]
                    : data.Flex[1]}
                </div>
                <div>
                  {authors ? (
                    <div className="text-gray-400">
                      +${authorPrice}/mo{" "}
                    </div>
                  ) : (
                    <>...</>
                  )}
                </div>
                <div>
                  {knowledgeBase ? (
                    <div className="text-gray-400">
                      +${knowledgePrice}/mo
                    </div>
                  ) : (
                    <>...</>
                  )}
                </div>
                
               {authors && knowledgeBase? <div>
                  $
                  {activeBusiness
                    ? total(busness,authorPrice,knowledgePrice)
                    : activeEnterprise
                    ? total(entrprise,authorPrice,knowledgePrice)
                    : total(flx,authorPrice,knowledgePrice)}
                  /mo
                </div>:authors && !knowledgeBase?<div>
                  $
                  {activeBusiness
                    ? total(busness,authorPrice,0)
                    : activeEnterprise
                    ? total(entrprise,authorPrice,0)
                    : total(flx,authorPrice,0)}
                  /mo
                </div>:knowledgeBase && !authors?<div>
                  $
                  {activeBusiness
                    ? total(busness,knowledgePrice,0)
                    : activeEnterprise
                    ? total(entrprise,knowledgePrice,0)
                    : total(flx,knowledgePrice,0)}
                  /mo
                </div>: <div>
                  $
                  {activeBusiness
                    ? total(busness,0,0)
                    : activeEnterprise
                    ? total(entrprise,0,0)
                    : total(flx,0,0)}
                  /mo
                </div>}
               

              </div>
            </div>
          </div>

          <div className="pt-9 text-sm text-gray-400 pb-2">
            Annual discount:
          </div>
          <div className="border p-2  rounded-sm">
            {activeFlex ? (
              <div className="flex flex-row space-x-2">
                <div className="flex flex-col text-sm font-sans space-y-2">
                  <div className="">10% off when billed annually</div>
                  <div className="">
                    25% off for Non-Profits when billed annually!
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="">$1233</div>
                  <div className="">$123</div>
                </div>
              </div>
            ) : activeBusiness ? (
              <div className="flex flex-row space-x-2">
                <div className="flex flex-col text-sm font-sans space-y-2">
                  <div className="">10% off when billed annually</div>
                  <div className="">
                    25% off for Non-Profits when billed annually!
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="">$123</div>
                  <div className="">$123</div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row text-gray-400">
                <div className="pr-1">* </div>
                <div>
                  Monthly pricing excludes custom terms and conditions. Please
                  contact us for annual enterprise pricing and discounts
                </div>
              </div>
            )}
            <div className="flex flex-row"></div>
          </div>

          <div className="flex flex-row space-x-20">
            <div className="pt-7">No credit card required</div>
            <div className="pt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-sm bg-orange-300  px-7 py-3 text-sm font-semibold text-black shadow-sm hover:bg-orange-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
