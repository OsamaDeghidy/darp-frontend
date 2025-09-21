import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { notification } from 'antd/lib';
import { isString } from 'lodash';

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			if (typeof window !== 'undefined') {
				const data = (action as any).payload.data;
				notification.error({
					description: isString(data.Data) ? data.Data : data.Data[0],
					message: data.Message,
				});
			}
		}
		return next(action);
	};
