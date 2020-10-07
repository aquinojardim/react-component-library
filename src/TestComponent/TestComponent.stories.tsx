import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent"
};

export const Primary = () => <TestComponent theme="primary" />;

export const Secondary = () => <TestComponent theme="secondary" />;

export const Pink = () => <TestComponent theme="pink" />;

export const GhostBlack = () => <TestComponent theme="ghost-black" />;

export const GhostWhite = () => <TestComponent theme="ghost-white" />;
