import React from 'react'
import { Link } from '../../../../components/Link'
import { S } from '../Works_Styles'

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
  tabsItems: Array<{
    status: TabsStatusType
    title: string
  }>
  changeFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (
  props: TabMenuPropsType
) => {
  return (
    <S.TabMenu>
      <ul>
        {props.tabsItems.map(
          (
            item: {
              status: TabsStatusType
              title: string
            },
            index: number
          ) => {
            return (
              <S.ListItem key={index}>
                <Link
                  active={props.currentFilterStatus === item.status}
                  as={'button'}
                  onClick={() => {
                    props.changeFilterStatus(item.status)
                  }}
                >
                  {item.title}
                </Link>
              </S.ListItem>
            )
          }
        )}
      </ul>
    </S.TabMenu>
  )
}
