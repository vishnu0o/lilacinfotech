import React, { useEffect, useState } from 'react'
import { liststudents } from '../services/Apiservices'
import { baseurl } from '../url'

function Liststudents() {

    const [students, setstudents] = useState([])

    useEffect(() => {

        const fetchstudents = async () => {

            const studentslist = await liststudents()
            if (studentslist.status) {
                setstudents(studentslist.students)
            }
        }
        fetchstudents()

    }, [])

    return (
        <div className='md:ml-4 h-screen overflow-y-auto '>

            <div class="  mt-36 shadow-md sm:rounded-lg">
                <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                    <table class="w-full  overflow-x-auto table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    phonenumber
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    country
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Gender
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Maritalstatus
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    DOB
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Nationality
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                        {students.map((value)=>{
                            return(

                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                 <td class="px-6 py-4">
                                <img  className='w-12 h-12 rounded-full' src={`${baseurl}/images/` + value.images} alt="" />
                                    {value.name}
                                </td>
                     
                                <td class="px-6 py-4">
                                    {value.email}
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {value.phonenumber}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {value.country}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {value.gender}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {value.maritalstatus}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {value.dob}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    {value.nationality}
                                </td>
                               
                            </tr>
                            )
                        })}



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Liststudents
