import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import CompletePresentation from './complete-presentation'
import { Button } from '@/components/ui/button'

const PresentationSection = () => {
  return (
    <div className="max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">About me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I am a Software Engineer graduated from the <strong>Escuela Politécnica Nacional</strong>,
            and I am passionate about creating technological solutions that positively impact people. <br />
            I have worked as a Backend Developer, Frontend Developer and have knowledge in AWS.
          </p>
          <div className="flex justify-end">
            <CompletePresentation asChild>
              <Button variant='link' size='sm' className="">Show more...</Button>
            </CompletePresentation>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PresentationSection