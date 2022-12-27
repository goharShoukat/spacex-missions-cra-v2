import React from 'react'
import { Typography, CardContent, CardActions } from '@mui/material'
import { Button } from '../'
import { StyledLaunchCard, StyledLaunchCardActionArea, LaunchCardProperties } from '.'

export const LaunchCard = ({
    missionName,
    payloads,
    launchNumber,
    details,
    date,
    links
}: LaunchCardProperties) => {
    return (
        <StyledLaunchCard>
            <StyledLaunchCardActionArea>
                <CardContent>
                    <Typography gutterBottom variant='caption'>
                        {date}
                    </Typography>
                    <Typography gutterBottom variant='h4'>
                        Mission {missionName}
                    </Typography>
                    <Typography gutterBottom variant='h5'>
                        Launch Number: {launchNumber}
                    </Typography>
                    {details && <Typography>
                        {details}
                    </Typography>}
                </CardContent>
                <CardActions>
                    {links?.article && <Button size='small' label='Article' href={links.article} />}
                    {links?.reddit && <Button size='small' label='Reddit' href={links.reddit} />}
                    {links?.wikipedia && <Button size='small' label='Wikipedia' href={links.wikipedia} />}
                </CardActions>
            </StyledLaunchCardActionArea>
        </StyledLaunchCard>
    )
}