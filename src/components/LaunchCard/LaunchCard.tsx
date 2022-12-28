import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Button } from '../'
import { SecondStagePayloads } from '../../api'
import { StyledLaunchCard, StyledLaunchCardActionArea, LaunchCardProperties,
StyledTableContainer, StyledTableHead } from '.'

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
                    <Typography gutterBottom variant='h6'>
                        Payloads
                    </Typography>
                    <StyledTableContainer>
                        <Table>
                            <StyledTableHead>
                                <TableRow>
                                    <TableCell>Manufacturer</TableCell>
                                    <TableCell>Nationality</TableCell>
                                    <TableCell>Payload Type</TableCell>
                                </TableRow>
                            </StyledTableHead>
                            <TableBody>
                                {payloads?.map((payload:SecondStagePayloads, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {payload.manufacturer}
                                            </TableCell>
                                            <TableCell>
                                                {payload.nationality}
                                            </TableCell>
                                            <TableCell>
                                                {payload.payload_type}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </StyledTableContainer>
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