import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'

export default function Highlight() {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca nhiễm</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca khỏi</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca tử vong</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>

                </Card>
            </Grid>

        </Grid>
    )
}
