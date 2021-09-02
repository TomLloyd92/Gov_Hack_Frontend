
import React, {Component} from 'react';

function ProposalCard({title})
{
    return(
            <div class="grid md:grid-cols-3 gap-8 m-5 max-w-5xl mx-auto">
                <div class="bg-[#8632e6] ">
                    <div class="px-10 py-6 mb-10 text-center">
                        <div class="text-2xl font-bold text-white mb-4">{ title}</div>
                        <span class=" text-white" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam
                            distinctio molestias. Incidunt at consequuntur consequatur
                            officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?
                        </span>
                    </div>

                    <button class="w-full text-lg h-16 text-white font-extrabold bg-[#5932e6]">VIEW RECIPES</button>
                </div>   
        </div>
    )
}

/*
green - 0CF630
pink - e033e7
l purp - b332e6
d purp - 8632e6
blue - 5932e6
black - 030214
*/
export default ProposalCard