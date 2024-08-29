import React from 'react'
import logoIcon from '../../assets/image/icon-logo.png'

export default function Comparison() {
  return (
    <div className=" text-white py-16 bg-[#eaeff5] w-full" >
       <h2 className="text-3xl leading-9  font-semibold mb-8 text-[#000080] text-center">
        The Career Streesman Advantage
      </h2>
      <div className="mx-auto w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 text-left">
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <img
                    src={logoIcon}
                    alt="Career Streesman Logo"
                    className="w-8 h-8 mr-2"
                  />
                  {/* <span>Career Streesman</span> */}
                </div>
              </th>
              <th className="px-6 py-4 text-center">Free Resources</th>
              <th className="px-6 py-4 text-center">Other Courses</th>
            </tr>
          </thead>

          <tbody className="text-center">
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 text-left">Structured + problem-solving based</td>
              <td className="px-6 py-4">
                <span className="text-green-400 text-xl">✔️</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-400 text-xl">✔️</span>
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 text-left">Fastest 1:1 doubt support</td>
              <td className="px-6 py-4">
                <span className="text-green-400 text-xl">✔️</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 text-left">Integrated prep platform</td>
              <td className="px-6 py-4">
                <span className="text-green-400 text-xl">✔️</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-left">Profiles highlighted on Naukri</td>
              <td className="px-6 py-4">
                <span className="text-green-400 text-xl">✔️</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-[#c50101] text-xl">❌</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
