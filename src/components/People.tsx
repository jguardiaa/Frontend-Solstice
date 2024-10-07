const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-white py-14 sm:py-10 flex">
      <div className="mx-auto grid max-w-7xl gap-x-5 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h1 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h1>
                </div>
              </div>
            </li>
            
          ))}
        </ul>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h1 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h1>
                </div>
              </div>
            </li>
            
          ))}
        </ul>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
                <div>
                  <h1 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h1>
                </div>
              </div>
            </li>
            
          ))}
        </ul>
        <div className="flex">
  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
    {people.map((person) => (
      <li key={person.name}>
        <div className="flex items-center gap-x-6">
          <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-full" />
          <div>
            <h1 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h1>
          </div>
        </div>
      </li>
      
    ))}
  </ul>
</div>
      </div>
    </div>
  )
}
