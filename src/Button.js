import React from 'react';
import * as EmotionReact from '@emotion/react';
import * as MantineCore from "@mantine/core";
import * as MantineDates from "@mantine/core";
import * as MantineHooks from "@mantine/hooks";
import * as TablerIcons from "@tabler/icons";
import * as DayJs from "dayjs";
function Button() {


    return (
        <div className='button'>
            <MantineCore.Button
                size="xl"
                loading={false}
                compact={false}
                rightIcon={null}
                disabled={false}
                variant="gradient"
                leftIcon={undefined}
                loaderPosition="left" >
                Refresh
            </MantineCore.Button>
        </div>
    );
}
export default Button;