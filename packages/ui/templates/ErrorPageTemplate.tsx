import React from 'react'
import CenteredContentContainer from './container/CenteredContentContainer'
import FilledButton from '../atoms/FilledButton'
import { IErrorPage } from '../types/props'

const ErrorPageTemplate = ({ link, message="Sorry something went wrong" }: IErrorPage) => {
  return (
    <CenteredContentContainer>
        <div className="flex flex-col gap-y-3 items-center">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXdmenZucXJlbjdxd2hodDZiZ2tpZGNnNG9tYm44ZGl4MHRpZWlsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l4FGI8GoTL7N4DsyI/giphy.gif" className="w-[250px]" alt="Error!!" />
            <h1 className="text-lg">{message}</h1>
            <FilledButton onClick={link}>Back to Homepage</FilledButton>
        </div>
    </CenteredContentContainer>
  )
}

export default ErrorPageTemplate