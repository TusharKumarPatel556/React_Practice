import React from "react";
import Welcome from "./Components/ClassComponent/Welcome";
import CounterState from "./Components/ClassComponent/CounterState";
import "./App.css";
import FunctionClickEvent from "./Components/FunctionalComponent/FunctionClickEvent";
import ClassClick from "./Components/ClassComponent/FunctionClickClassComp";
import EventBindClassComp from "./Components/ClassComponent/EventBindClassComp";
import ChildCommunParrent from "./Components/ClassComponent/ChildCommunWithParent";
import ConditionalRendering from "./Components/ClassComponent/ConditionalRendering";
import NameList from "./Components/FunctionalComponent/NameList";
import Form from "./Components/ClassComponent/Form";
import LifeCycleA from "./Components/ClassComponent/LifeCycleA";
import Fragment from "./Components/FunctionalComponent/Fragment";
import ParentClassComponent from "./Components/ClassComponent/ParentClassComponent";
import PureFunctionalComponent from "./Components/FunctionalComponent/PureFunctionalComponent";
import RefsClassDemo from "./Components/ClassComponent/RefsClassDemo";
import FrParentInput from "./Components/FunctionalComponent/FrParentInput";
import PortalDemo from "./Components/FunctionalComponent/PortalDemo";
import ErrorBoundaries from "./Components/FunctionalComponent/ErrorBoundaries";
import ErrMainBoundary from "./Components/FunctionalComponent/ErrMainBoundary";
import HighOrdClickCounter from "./Components/ClassComponent/HighOrdClickCounter";
import HighOrdHoverCounter from "./Components/ClassComponent/HighOrdHoverCounter";
import RenderProps from "./Components/ClassComponent/RenderProps";
import REnderPrpHoverCounter from "./Components/ClassComponent/REnderPrpHoverCounter";
import User from "./Components/ClassComponent/User";
import Counter from "./Components/ClassComponent/RePropCounter";
import ComponentC from "./Components/Context/ComponentC";
import { UserProvider } from "./Components/Context/UserContext";

function App() {
  return (
    <>
      <UserProvider value="vishwas">
        <ComponentC />
      </UserProvider>

      {/* <Counter
        render={(count, incrementCount) => (
          <RenderProps count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <REnderPrpHoverCounter
            count={count}
            incrementCount={incrementCount}
          />
        )}
      /> */}

      {/* <RenderProps />
      <REnderPrpHoverCounter />
      <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
      {/* <HighOrdClickCounter name="tushar" />
      <HighOrdHoverCounter /> */}
      {/* <ErrMainBoundary>
        <ErrorBoundaries heroName="Batman" />
      </ErrMainBoundary>
      <ErrMainBoundary>
        <ErrorBoundaries heroName="Superan" />
      </ErrMainBoundary>
      <ErrMainBoundary>
        <ErrorBoundaries heroName="joker" />
      </ErrMainBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FrParentInput /> */}
      {/* <RefsClassDemo /> */}
      {/* <PureFunctionalComponent /> */}
      {/* <ParentClassComponent /> */}
      {/* <Fragment /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <ConditionalRendering /> */}
      {/* <ChildCommunParrent /> */}
      {/* <EventBindClassComp /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClickEvent /> */}
      {/* <CounterState name="Tushar" heroName="Patel" /> */}
      {/* <Welcome name="Bruce" /> */}
    </>
  );
}

export default App;
