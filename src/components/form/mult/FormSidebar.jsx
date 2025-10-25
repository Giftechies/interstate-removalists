export default function FormSidebar({formData}) {
    return(
          <aside className=" sticky top-30 hidden h-fit  overflow-y-auto  self-start lg:block">
            {formData?.pickup_address? (
              <div className=" innershadow  mx-auto w-full p-8 ">
                <span className="h4 font-medium ">Your Move</span>
                <h5 className="h5 font-medium mt-2 ">Pickup & delivery</h5>
                <div className="pick mt-3">
                  {formData?.pickup_address && (
                    <h3 className=" address h5 ">
                      {formData?.pickup_address}
                    </h3>
                  )}
              
                    <div className="  mx-4">
                    {formData?.property_type && (
                      <span className="  mr-4">
                        {formData?.property_type}
                      </span>
                    )}{" "}
                    {formData?.bed_room && (
                      <span className=" ">
                        {formData?.bed_room} Bedroom
                      </span>
                    )}
                 
                  </div>
                  <div className="w-full" >
                       <h4 className="place">
                      {formData?.place_type?.map(
                        (p, index) => (
                          <span
                            key={index}
                            className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                          >
                            {p === "Stairs"
                              ? `Stairs-${formData?.pick_flights} Flights`
                              : p}
                          </span>
                        ),
                      )}

                  
                    </h4>
                    <h4 className="street" >   
                       {formData?.pick_variation.map(
                        (p, index) => (
                          <span
                            key={index}
                            className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  "
                          >
                            {p}
                          </span>
                        ),
                      )}</h4>
                      {formData?.pick_variation_meter && (
                        <span className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  ">
                          {formData?.pick_variation_meter} m
                        </span>
                      )}
                  </div>
             
                </div>
                {formData?.drop_address && (
                  <div className="delivery mt-6   border-b-2 border-black-1 pb-4">
                    {formData?.drop_address && (
                      <h3 className=" address text-[18px] ">
                        {formData?.drop_address}
                      </h3>
                    )}

                    <div className=" mx-4">
                      <h4 className="place">
                        {formData?.drop_place_type?.map(
                          (p, index) => (
                            <span
                              key={index}
                              className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                            >
                              {p === "Stairs"
                                ? `Stairs-${formData?.drop_flights} Flights `
                                : p}
                            </span>
                          ),
                        )}

                        {formData?.drop_variation?.map(
                          (p, index) => (
                            <span
                              key={index}
                              className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  "
                            >
                              {p}
                            </span>
                          ),
                        )}
                      </h4>
                    </div>
                  </div>
                )}

                {/* {formData?.calendar?.dates && (
                  <div className="date">
                    {formData?.calendar?.dates && (
                      <div className="flex justify-between">
                        <span className="">Pickup date</span>
                        <span>{formData?.calendar?.dates}</span>
                      </div>
                    )}
                  </div>
                )} */}
              </div>
            ) : (
              ""
            )}
          </aside>
    )
}