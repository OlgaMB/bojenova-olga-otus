import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const Container = ({ children }: IProps) => (
  <div>
    <h1>{children}</h1>
  </div>);
