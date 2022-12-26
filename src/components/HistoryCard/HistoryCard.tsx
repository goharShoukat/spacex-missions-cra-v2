import React from 'react'
import { Typography, CardActions, CardContent } from '@mui/material'
import { HistoryCardProperties } from '.'
import { StyledHistoryCard, StyledHistoryCardActionArea } from '.'
import { Button } from '../../components'

export const HistoryCard = ({ title, subTitle, details, links }: HistoryCardProperties) => {
    return (
        <StyledHistoryCard>
            <StyledHistoryCardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    {subTitle && <Typography gutterBottom variant='h6'>
                        {subTitle}
                    </Typography>}
                    {details && <Typography>
                        {details}
                    </Typography>}
                </CardContent>
            </StyledHistoryCardActionArea>
            <CardActions>
                {links?.article && <Button size = "small" label = "Article" href = {links.article}/>}
                {links?.reddit && <Button size = "small" label = "Reddit" href = {links.article}/>}
                {links?.wikipedia && <Button size = "small" label = "Wikipedia" href = {links.article}/>}
            </CardActions>
        </StyledHistoryCard>
    )
}