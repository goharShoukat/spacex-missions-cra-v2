# Coding Challenge
## TASK 1

Setup the elements for the project
 - Material UI + Styled Components
 - Redux with devtools
 - React Router

 The state tree will be divided into domains such as 'History', 'Launches', 'Rockets'


## TASK 2
Setup primitive compisitions for history and launches, and hook them to the routes '/history' and '/launches' respectively
 - Home
 - History
 - Launches

 ## TASK 3
 Display data from the SpaceX history endpoint
  - Setup history store 
  - Create historycard component
  - Display response on /history page by dispatching action to retrieve history data and set on store
  - Typescript support for react app

  ## TASK 4
  Display data from the SpaceX launches endpoint
    - Setup launches store
    - Create LaunchCard component
    - Display launch response on /launch page by dispatching action to retrieve launch data and set on store
    - Filter by search term
    - Filter by date
  # Note:
    Significant delay in input and date inputs. Interestingly that goes away when the input and date inputs are used. 

  ## TASK 5
  Display data by diltering with orbit id
   - Setup endpoints and store related to rockets and payloads
   - Enhance launches composition to fetch rockets related data component
   - Display all possible orbitId and rocket classes as filterable options via buttons
   - Create useState for holding various orbit related data for filtering 
   - Create a clear all filters button
   - Adjust Buttons component to accept onClick command
   - Adjust styling to make small buttons appear row wise, instead of column wise